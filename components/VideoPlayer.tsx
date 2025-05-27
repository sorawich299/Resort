interface YouTubeEmbedProps {
  videoId: string;
  className?: string;
}

export default function VedioPlayer({ videoId, className = "" }: YouTubeEmbedProps) {
  return (
    <div className="py-28"><div className={`relative w-full pt-[56.25%] ${className}` }>
      <iframe
        className="absolute top-0 left-0 w-full h-full shadow-lg"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div></div>
    
  );
}
