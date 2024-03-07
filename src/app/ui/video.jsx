const Video = ({source}) => {
    return (
        <iframe 
        width="500" 
        height="315" 
        src={source} 
        title="YouTube video player"
        frameborder="0" 
        allow="accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture; 
        web-share" allowfullscreen>
        </iframe>
    )
}
export default Video;