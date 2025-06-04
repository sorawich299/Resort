type FeatureItemProps = {
    Icon: React.FC<{ color?: string}>;
    text: string;
}

export default function FeatureItem({Icon, text}: FeatureItemProps){
    return (
        <div className="flex flex-col gap-6 max-w-[264px] w-full">
            <Icon color="var(--color-icon-primary)"/>
            <span className="text-lg font-medium text-black"
            style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
                {text}
            </span>
        </div>
    )
}