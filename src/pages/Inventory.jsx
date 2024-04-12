import React from 'react';
import {DataTable, Header, } from "../components/index.js";
import { Card } from "antd";

const Inventory = () => {

    return (
<div>
                    <div className={'bg-white rounded-lg mx-3 mt-5'}>
                        <div className={'flex flex-col gap-3 pt-2'}>
                            <div className={'flex flex-row justify-between '}>
                                <p className={'pl-3 text-3xl font-bold '}>Overall inventory</p>
                                <form className="mr-2">
                                    <select id="time"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-transparent focus:border-gray-300 block w-full p-2.5">
                                        <option selected value="monnth">Monthly</option>
                                        <option value="weekly">Weekly</option>
                                        <option value="daily">Daily</option>
                                    </select>
                                </form>

                            </div>

                            <div className={'flex flex-wrap items-center justify-center px-5'}>
                                <div className={'w-1/4 bg-white text-blue font-semibold'}>
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
                    </div>
                    <div className={'bg-white rounded-lg p-2 mt-2 mx-3'}>
                        <DataTable/>
                    </div>
</div>
)
}
export default Inventory
