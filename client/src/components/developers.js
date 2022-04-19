//developers list component
import UserDetail from "./userdetail";
import { useGetDevelopersFromHackathonQuery } from "../redux/mainAPI";

export default function Developers({ hackathonId }) {
  const { data, loading, error } = useGetDevelopersFromHackathonQuery(hackathonId);

  if (error) {
    return <p>Error: {error.status}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const elm = <>
    {data? data.map(user => {
        return (
            <UserDetail key={user.userId} user={user} />
        );
    }) : null}
  </>

  return (
      elm
  );


}