import Image from "next/image";
import styles from "./page.module.css";
import Video from "./ui/video";
export default function Home() {
  return (
    <div className="absolute left-60 top-20">
      <div className="flex flex-wrap gap-24 p-t-10">
      <Video source={"https://www.youtube.com/embed/KNXYonYD59w?si=FbutMFPA340wtU_e&amp;start=278"}/>
        <Video source={"https://www.youtube.com/embed/ueo8qqcC8qk?si=AO55tVZvssXzzHY5&amp;start=278" }/>
        <Video source={"https://www.youtube.com/embed/2XE4-NvIZow?si=UgqZaGZizSVe2s3U&amp;start=278"}/>
        <Video source={"https://www.youtube.com/embed/E_SbwSe15y0?si=XLw6RzvDxo7E5YaW&amp;start=278"}/>
        <Video source={"https://www.youtube.com/embed/KNXYonYD59w?si=FbutMFPA340wtU_e&amp;start=278"}/>
        <Video source={"https://www.youtube.com/embed/ueo8qqcC8qk?si=AO55tVZvssXzzHY5&amp;start=278" }/>
        <Video source={"https://www.youtube.com/embed/2XE4-NvIZow?si=UgqZaGZizSVe2s3U&amp;start=278"}/>
        <Video source={"https://www.youtube.com/embed/E_SbwSe15y0?si=XLw6RzvDxo7E5YaW&amp;start=278"}/>
      </div>
    </div>
  );
}
