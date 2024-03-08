/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Divider, Tab, Tabs } from "@nextui-org/react"
import CardImage from "../../../components/CardImage"
import { useState } from "react";
import { getArrayById } from "../../../utils/utils";

const StudentLayoutForm = ({ data, tabs, imageLogo, image, title }) => {
    const [isGrid, setIsGrid] = useState(false);
    const [selectedKey, setSelectedKey] = useState('')

    const filteredData = getArrayById(data, 'categoryId', selectedKey)

    return (
        <div className="w-full">
            <CardImage image={imageLogo} title={title} />
            <Divider />
            <div className="flex w-full flex-col">
                <Tabs
                    aria-label="Dynamic tabs"
                    items={tabs}
                    variant='underlined'
                    selectedKey={selectedKey}
                    onSelectionChange={setSelectedKey}
                >
                    {tabs.map((tab) => (
                        <Tab
                            key={tab.id}
                            title={tab.title}
                        >
                        </Tab>
                    ))}
                </Tabs>
            </div>

            <div >
                {
                    filteredData && filteredData.length > 0 ?
                        (filteredData.map((item, index) => (
                            <div key={index}
                                className={`grid ${isGrid ? 'xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7' : ''} gap-2`}
                            >
                                {
                                    (item.grades) ? (
                                        (item.grades).map((grade, index) => (
                                            <div
                                                key={index}
                                                className={`flex group animate-appearance-in p-3 ${isGrid ? 'flex-col justify-center items-center text-center' : 'items-center'} hover:cursor-pointer hover:bg-gray-50 rounded-md border`}
                                            >
                                                <img src={image} className='w-12' />
                                                <div className="flex justify-between w-full">
                                                    <h1 className='text-sm font-medium text-balance flex-1 text-gray-500'>{grade.quizName}</h1>
                                                    <h1 className='text-sm font-medium text-balance text-gray-500'>{grade.grade}/100</h1>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div
                                            key={item.id}
                                            className={`flex group animate-appearance-in my-1 p-3 ${isGrid ? 'flex-col justify-center items-center text-center' : 'items-center'} hover:cursor-pointer hover:bg-gray-50 rounded-md border`}
                                        >
                                            <img src={image} className='w-12' />
                                            <div className="flex justify-between w-full">
                                                <h1 className='text-sm font-medium text-balance flex-1 text-gray-500'>{item.courseName}</h1>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        )))
                        :
                        <h1 className="w-full col-span-2 mx-4 text-gray-600">No {title == "Quiz" ? "Quizzes" : `${title}s`} at the moment</h1>
                }
            </div>
        </div>
    )
}
export default StudentLayoutForm