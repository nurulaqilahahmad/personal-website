import { Table } from "@chakra-ui/react";

function Task({ task }) {
    const isImage = ['gif', 'jpg', 'jpeg', 'png']; //you can add more
    const isVideo = ['mpg', 'mp2', 'mpeg', 'mpe', 'mpv', 'mp4'] // you can add more extention

    const videos = document.querySelectorAll('video');
    for (var i = 0; i < videos.length; i++) {
        videos[i].play();
    }

    // function getFileName(fileName) {
    //     console.log(fileName);
    //     console.log(fileName.split(".")[1]);
    // }

    return (
        <Table.Root size="lg" variant={"outline"}>
            <Table.Header className="bg-transparent">
                <Table.Row className="max-2xl:hidden">
                    <Table.ColumnHeader style={{ color: "white" }}>Result</Table.ColumnHeader>
                    <Table.ColumnHeader style={{ color: "white" }}>Explanation</Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {task.map((t) => (
                    <Table.Row key={t.id} className="duration-[0.4s]">
                        <Table.Cell className="max-2xl:hidden">
                            {t.file ? isImage?.includes(t.file.fileName.split(".")[1]) && <img className="noBorderImg" alt={t.file.fileName} src={t.file.url} style={{ zIndex: '1' }} /> : ''}
                            {t.file ? isVideo?.includes(t.file.fileName.split(".")[1]) && <video autoplay muted loop controls><source src={t.file.url} type={"video/" + t.file.fileName.split(".")[1]} />Your browser does not support the video tag.</video> : ''}
                            {t.link && <iframe src={t.link} title="Iframe for Project" className="max-sm:w-[100%]"></iframe>}
                        </Table.Cell>
                        <Table.Cell className="max-2xl:hidden">{t.explanation}</Table.Cell>
                        <Table.Cell className="2xl:hidden">
                            {t.file ? isImage?.includes(t.file.fileName.split(".")[1]) && <img className="noBorderImg" alt={t.file.fileName} src={t.file.url} style={{ zIndex: '1' }} /> : ''}
                            {t.file ? isVideo?.includes(t.file.fileName.split(".")[1]) && <video autoplay muted loop controls><source src={t.file.url} type={"video/" + t.file.fileName.split(".")[1]} />Your browser does not support the video tag.</video> : ''}
                            {t.link && <iframe src={t.link} title="Iframe for Project" className="max-sm:w-[100%]"></iframe>}
                            <br />
                            {t.explanation}
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}

export default Task