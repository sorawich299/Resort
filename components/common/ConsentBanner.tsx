import { FC, useState } from "react";

interface ConsentBannerProps {
  onAccept?: () => void;
  onClose?: () => void;
}

const ConsentBanner: FC<ConsentBannerProps> = ({ onAccept, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    if (onAccept) {
      onAccept();
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    isVisible && (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-50">
        <div className="flex justify-between items-center">
          <p className="text-sm">
            This website uses cookies to ensure you get the best experience on
            our website.
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleAccept}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
              Accept
            </button>
            <button
              onClick={handleClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ConsentBanner;
