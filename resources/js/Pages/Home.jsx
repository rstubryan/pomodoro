import { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import Header from "@/Components/molecules/Header";
import { PomoHeading } from "@/Components/atoms/Typography";
import { Container } from "@/Components/templates/Container.jsx";
import { Button } from "@/Components/ui/button.jsx";
import { CircleHelp, CircleStop, Play, Plus } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/Components/ui/tooltip";
import { Input } from "@/Components/ui/input.jsx";
import { Label } from "@/Components/ui/label.jsx";

export default function Home() {
    const { data, setData, post, processing, errors, reset } = useForm({
        task_name: null,
        task_pomo: null,
    });

    const [calculatedTime, setCalculatedTime] = useState("");

    function handlePomoChange(e) {
        const pomoValue = e.target.value;
        setData("task_pomo", pomoValue);

        const totalMinutes = pomoValue * 25;
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        setCalculatedTime(`${hours} hours and ${minutes} minutes`);
    }

    function handleSubmit(e) {
        e.preventDefault();
        post("/task", {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    }

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
                        <div className="lg:flex justify-between items-center ">
                            <PomoHeading
                                className={`text-secondary dark:text-primary`}
                            >
                                Task
                            </PomoHeading>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        className={`lg:w-max w-full lg:mt-0 mt-5 lg:p-10 p-0`}
                                    >
                                        <Plus />
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Create Task</DialogTitle>
                                        <DialogDescription>
                                            <form
                                                className={`mt-3`}
                                                onSubmit={handleSubmit}
                                            >
                                                <Label htmlFor={`task_name`}>
                                                    Task Name
                                                </Label>
                                                <Input
                                                    type={`text`}
                                                    id={`task_name`}
                                                    name={`task_name`}
                                                    placeholder={`Task name`}
                                                    className={`w-full my-2`}
                                                    value={data.task_name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "task_name",
                                                            e.target.value,
                                                        )
                                                    }
                                                    required
                                                />
                                                {errors.task_name && (
                                                    <div>
                                                        {errors.task_name}
                                                    </div>
                                                )}
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <Label
                                                                htmlFor={`task_pomo`}
                                                                className={`flex gap-2 items-center`}
                                                            >
                                                                Pomo's Time
                                                                <CircleHelp
                                                                    size={14}
                                                                />{" "}
                                                                <span className="text-primary/30 text-xs">
                                                                    (Hover for
                                                                    more info)
                                                                </span>
                                                            </Label>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>
                                                                1 Pomo = 25
                                                                minutes
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                                <Input
                                                    type={`number`}
                                                    id={`task_pomo`}
                                                    name={`task_pomo`}
                                                    placeholder={`Pomo's time`}
                                                    className={`w-full my-2`}
                                                    value={data.task_pomo}
                                                    onChange={handlePomoChange}
                                                    onKeyDown={(e) => {
                                                        if (
                                                            e.key === "." ||
                                                            e.key === ","
                                                        ) {
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                    step={`1`}
                                                    required
                                                />
                                                {calculatedTime && (
                                                    <Label
                                                        htmlFor={`task_pomo`}
                                                        className={`text-primary/50 text-sm py-2`}
                                                    >
                                                        You will spend{" "}
                                                        <span className="font-semibold">
                                                            {calculatedTime}
                                                        </span>
                                                    </Label>
                                                )}
                                                {errors.task_pomo && (
                                                    <div>
                                                        {errors.task_pomo}
                                                    </div>
                                                )}
                                                <Button
                                                    type={`submit`}
                                                    className={`w-full mt-2`}
                                                    disabled={processing}
                                                >
                                                    Submit
                                                </Button>
                                            </form>
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
