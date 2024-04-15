
type Props = {
    status: string;
}

export const AvailableChip: React.FC<Props> = ({status}) => {
    if(status === 'Available') {
        return (
            <div className="badge badge-success badge-lg badge-outline">Available</div>
        )
    } else if(status === 'Unavailable') {
        return (
            <div className="badge badge-error badge-outline badge-lg">Unavailable</div>
        )
    } else if(status === 'In-Process') {
        return (
            <div className="badge badge-warning badge-outline">Pending</div>
        )
    }
}