import React from 'react';
import {DataTable, Header, } from "../components/index.js";
import { Card,  } from "antd";

const Inventory = () => {

    return (
<div>
                    <Card className={'bg-white rounded-lg p-2 mt-2 mx-3'}>
                        <div className={'flex flex-col gap-3'}>
                            <div className={'flex flex-row justify-between '}>
                                <p className={'text-2xl font-semibold '}>Overall inventory</p>
                                <form className="">
                                    <select id="time"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-transparent focus:border-gray-300 block w-full p-2.5">
                                        <option selected value="monnth">Monthly</option>
                                        <option value="weekly">Weekly</option>
                                        <option value="daily">Daily</option>
                                    </select>
                                </form>

                            </div>

                            <div className={'flex flex-wrap items-center'}>
                                <div className={'w-1/4 bg-white text-blue font-semibold '}>
                                    <p className="text-3xl">Categories</p>
                                    <p className="text-4xl">12</p>
                                </div>

                                <div className={'w-1/4 bg-white text-blue font-semibold'}>
                                    <p className="text-3xl">Total products</p>
                                    <p className="text-4xl">12</p>
                                </div>

                                <div className={'w-1/4 bg-white text-green font-semibold'}>
                                    <p className="text-3xl">Top selling</p>
                                    <p className="text-4xl">12</p>
                                </div>

                                <div className={'w-1/4 bg-white text-red font-semibold'}>
                                    <p className="text-3xl">Low stocks</p>
                                    <p className="text-4xl">12</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <div className={'bg-white rounded-lg p-2 mt-2 mx-3'}>
                        <DataTable/>
                    </div>
</div>
)
}
export default Inventory
