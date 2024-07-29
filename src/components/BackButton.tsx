'use client';

import { FaArrowLeft } from 'react-icons/fa';

export default function BackButton() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center mt-4 px-8 py-2 shadow-lg dark:bg-dark-blue dark:text-white bg-very-light-gray text-very-dark-blue-text rounded"
    >
      <FaArrowLeft className="mr-2 dark:text-white text-very-dark-blue-text" />
      Back
    </button>
  );
}
