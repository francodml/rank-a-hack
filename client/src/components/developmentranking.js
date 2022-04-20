import Development from "./development";

export default function DevelopmentRanking({ hackathon, developments }) {
    // For reusability's sake,
    // if developments isn't empty, it'll use that as the source for entry data and not the hackathon's entries.
    // This allows me to re-use the same ranked/sorted list component for the site-wide rankings and the hackathon's rankings.
    const sel = developments ? developments : hackathon.entries
    var entries = [...sel].sort((a, b) => b.ranking - a.ranking);

    const elm = <>
        {entries? entries.map(entry => {
            return (
                <Development key={entry._id} entry={entry} />
            );
        }) : null}
    </>

    return (
        elm
    );


}