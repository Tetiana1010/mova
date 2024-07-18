"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const TextEditor: React.FC = () => {
  const [value, setValue] = useState('');

  const handleChange = (content: string) => {
    setValue(content);
    console.log(content);
  };

  return (
    <ReactQuill value={value} onChange={handleChange} />
  );
};

export default TextEditor;