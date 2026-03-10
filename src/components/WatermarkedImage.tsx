import React from 'react';

interface WatermarkedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    containerClassName?: string;
}

const WatermarkedImage: React.FC<WatermarkedImageProps> = ({ containerClassName = "", className = "", ...props }) => {
    return (
        <div className={`relative overflow-hidden ${containerClassName}`}>
            <img className={className} {...props} />
            <div
                className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center opacity-30 mix-blend-overlay"
                style={{
                    backgroundImage: "url('/images/watermark.png')",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    width: "100%",
                    height: "100%",
                    padding: "20%" // Keep the watermark away from edges
                }}
                aria-hidden="true"
            />
        </div>
    );
};

export default WatermarkedImage;
