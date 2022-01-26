import CardTable from "@/components/Dashboard/Card/CardTable";
import { DisGuard } from "@/guard/DisGuard";
import React from "react";

function DistributerTables() {
    return (
        <div className="flex flex-wrap mt-4">
            <div className="w-full mb-12 px-4">
                <CardTable />
            </div>
        </div>
    );
}
DistributerTables.PageLayout = DisGuard;
export default DistributerTables;
