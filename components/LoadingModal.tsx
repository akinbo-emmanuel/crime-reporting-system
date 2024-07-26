"use client"

import { generalStore } from "@/store/store";
import { Spin } from "antd";

const LoadingModal = () => {
    const loading = generalStore((state: any) => state.loading);

    if (loading === false || loading === undefined) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000040] flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg">
                <Spin size="large" />
            </div>
        </div>
    )
}

export default LoadingModal