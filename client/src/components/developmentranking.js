import Development from "./development";

export default function DevelopmentRanking({ hackathon }) {

    // const { hackathon, loading, error } = useGetHackathonQuery(hackathonId);

    // if (error) {
    //     return <p>Error: {error.status}</p>;
    // }

    // if (loading) {
    //     return <p>Loading...</p>;
    // }

    console.log(hackathon);

    const elm = <>
        {hackathon? hackathon.entries.map(entry => {
            return (
                <Development key={entry._id} entry={entry} />
            );
        }) : null}
    </>

    return (
        elm
    );


}