import { axiosInstance } from "@/lib/utils";
import { MorelikeThis } from "@/components/Morelikethis";

export async function DetailDesc({ id }: { id: string }) {
  const getGenres = async () => {
    const response = await axiosInstance.get(`/movie/${id}?language=en-US`);

    return response.data;
  };

  const genre = await getGenres();

  const getDesc = async () => {
    const desc = await axiosInstance.get(`/movie/${id}?language=en-US`);
    return desc.data;
  };
  const desc = await getDesc();

  const getCredits = async () => {
    const credits = await axiosInstance.get(
      `/movie/${id}/credits?language=en-US`
    );

    return credits.data;
  };
  const credits = await getCredits();

  const getDirector = () => {
    const directors = credits.crew.filter((member: { job: string }) => {
      if (member.job === "Director") {
        return true;
      }
    });
    return directors;
  };

  const directors = getDirector();

  const getWriter = () => {
    const writers = credits.crew.filter((member: { job: string }) => {
      if (member.job === "Screenplay") {
        return true;
      }
    });
    return writers;
  };

  const writers = getWriter();

  return (
    <>
      <div className="w-full flex flex-col gap-10">
        <div className="flex gap-3 mt-10">
          {genre.genres.map((genre: { name: string }) => {
            return <div className="border rounded-2xl px-2 ">{genre.name}</div>;
          })}
        </div>
        <div>
          <p>{desc.overview}</p>
        </div>
        <div className="flex gap-10 border-b-2">
          <p className="font-bold">Director</p>
          {directors.map((director: { name: string }) => {
            return <div>{director.name}</div>;
          })}
        </div>
        <div className="flex gap-10 border-b-2">
          <p className="font-bold">Writer</p>
          {writers.map((director: { name: string }) => {
            return <div>{director.name}</div>;
          })}
        </div>
        <div className="flex gap-10 border-b-2">
          <p className="font-bold">Stars</p>
          <p>{credits.cast[0].name}</p>
          <p>{credits.cast[1].name}</p>
          <p>{credits.cast[2].name}</p>
        </div>
      </div>

      <MorelikeThis id={id} />
    </>
  );
}
