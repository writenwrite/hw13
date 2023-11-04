import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Center, Input, Text, VStack } from "@chakra-ui/react";

export default function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (bookData?.image) {
      const file = new File([], bookData.image, { type: 'image/*' });
      setSelectedImage(URL.createObjectURL(file));
      fileInputRef.current.value = '';
    }
  }, [bookData]);

  function handleImageUpload(event) {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  }

  return (
    <VStack spacing={4} align="center">
      <Box>
        <input
          type="file"
          accept="image/*"
          required
          ref={fileInputRef}
          onChange={handleImageUpload}
        />
      </Box>
      {selectedImage && (
        <Center>
          <img src={selectedImage} alt="Selected Image" style={{ maxWidth: '100%' }} />
        </Center>
      )}
      <Button colorScheme="teal" size="sm">Upload Image</Button>
      <Text fontSize="sm" color="gray.500">Accepted formats: JPEG, PNG, GIF, etc.</Text>
    </VStack>
  );
}
