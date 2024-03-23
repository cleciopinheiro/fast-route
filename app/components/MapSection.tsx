interface MapSectionProps {
    id: string;
}

function MapSection({ id }: MapSectionProps) {
    return (
        <div id={id} style={{ backgroundImage: `url('/map.png')`, backgroundPosition: "center", backgroundRepeat: "no-repeat"}} className="min-h-[85vh]">
        </div>
    );
}

export default MapSection;