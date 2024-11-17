import { Head } from "@inertiajs/react";
import Header from "@/Components/molecules/Header";
import { PomoHeading } from "@/Components/atoms/Typography";
import { Container } from "@/Components/templates/Container.jsx";
import { Button } from "@/Components/ui/button.jsx";
import { CircleStop, Play } from "lucide-react";

export default function Home() {
    return (
        <>
            <Head title="Workpace" />
            <Header />
            <Container>
                <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center min-h-screen">
                    <div className="lg:w-max w-full lg:my-0 my-5 lg:min-h-max min-h-screen flex flex-col justify-center items-center">
                        <PomoHeading
                            className={`text-center lg:text-start mb-5`}
                        >
                            25:00
                        </PomoHeading>
                        <div
                            className={`space-x-2 bg-[#242424] w-max p-5 rounded-full mx-auto lg:my-0 my-5`}
                        >
                            <Button className={`rounded-full`}>
                                <Play />
                            </Button>
                            <Button className={`rounded-full`}>
                                <CircleStop />
                            </Button>
                        </div>
                    </div>
                    <div className="justify-center items-center min-h-screen bg-[#242424] p-10 lg:text-start text-center">
                        <PomoHeading
                            className={`text-secondary dark:text-primary`}
                        >
                            Task
                        </PomoHeading>
                    </div>
                </div>
            </Container>
        </>
    );
}
