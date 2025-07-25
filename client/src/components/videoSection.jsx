import React from 'react'

const VideoSection = () => {

    const videos = [
        { src: "/videos/video_03.mp4", title: "Kia Carnival" },
        { src: "/videos/video_04.mp4", title: "Maruti Suzuki Swift" },
        { src: "/videos/video_06.mp4", title: "Royal Enfield Hunter 350" },
        { src: "/videos/video_07.mp4", title: "Suzuki Hayabusa Bike" },
        { src: "/videos/video_08.mp4", title: "Tata Curve" },
        { src: "/videos/video_09.mp4", title: "Toyoto Fortuner" },
        { src: "/videos/video_10.mp4", title: "Wagon R" },
    ];

    return (
        <>
            <section className="bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900 py-12 px-6 border rounded-md">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 border border-gray-800 rounded-4xl p-4 bg-white">
                        🛠️ YourCarStylist Studio – Real Transformations
                    </h2>
                    <p className="text-center mt-2 mb-8 font-mono text-orange-500 text-xl">
                        Watch our expert bring cars and bikes back to life!
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((video, index) => (
                            <div
                                key={index}
                                className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
                            >
                                <video
                                    src={video.src}
                                    controls
                                    className="w-full h-60 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="bg-blue-500 border rounded-lg text-lg font-bold text-white mt-2 text-center">{video.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default VideoSection