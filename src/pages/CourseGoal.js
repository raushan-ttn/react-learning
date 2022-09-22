import React, { useState } from "react";
import CourseGoalList from "../Components/self-learn/CourseGoal/CourseGoalList/CourseGoalList";
import CourseInput from "../Components/self-learn/CourseGoal/CourseInput/CourseInput";
const CourseGoal = () => {
    const courseData = [
        { id: 1, text: "hello world" },
        { id: 2, text: "This works." },
    ];

    const [newCourseData, SetCourseData] = useState(courseData);

    // Add new row after submit.
    const SaveGoalData = (props) => {
        const newlyAddedCourse = {
            id: Math.random(),
            text: props,
        }
        SetCourseData((preSaveData) => {
            return [newlyAddedCourse, ...preSaveData];
        })
    }
    // Delete row after click.
    const onDeleteItemData = (props) => {
        const deletedData = newCourseData.filter(item => item.id !== props);
        SetCourseData(deletedData);
    }

    return (
        <div>
            <CourseInput onAddGoal={SaveGoalData} />
            <CourseGoalList items={newCourseData} onDeleteItem={onDeleteItemData} />
        </div>
    );
}

export default CourseGoal;