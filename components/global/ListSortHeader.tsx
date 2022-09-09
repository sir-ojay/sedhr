import { numberWithCommas } from "@/helpers/numbersWithCommas";
import React, { useState } from "react";

type ListSortHeaderProps = {
	setGrid: (number: number) => void;
	defaultGrid: number;
	title: string;
	description?: string;
	results?: number;
};

const ListSortHeader = ({
	setGrid,
	defaultGrid,
	title,
	results,
	description = "Connect with people you know",
}: ListSortHeaderProps) => {
	const [listType, setListType] = useState("grid");

	return (
		<header className='flex justify-between items-center'>
			<div>
				<div className='font-semibold text-2xl text-dark-900 font-clash'>
					{title}
				</div>
				{!results && description ? (
					<div className='font-epilogue'>{description}</div>
				) : (
					<div className='font-epilogue'>
						Showing {numberWithCommas(results)} results
					</div>
				)}
			</div>
			<div className='flex items-center gap-4 font-epilogue'>
				
				<div className='flex items-center gap-4 border-l-2 pl-5 border-l-[#20243013]'>
					<button
						type='button'
						onClick={() => {
							setListType("grid");
							setGrid(defaultGrid);
						}}
						className={`p-2 ${
							listType === "grid" ? "bg-[#1e515610] rounded" : ""
						}`}>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M9 4H5C4.44772 4 4 4.44772 4 5V9C4 9.55228 4.44772 10 5 10H9C9.55228 10 10 9.55228 10 9V5C10 4.44772 9.55228 4 9 4Z'
								stroke={listType === "grid" ? "#1E5156" : "#616A6A"}
								fill={listType === "grid" ? "#1E5156" : ""}
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M19 4H15C14.4477 4 14 4.44772 14 5V9C14 9.55228 14.4477 10 15 10H19C19.5523 10 20 9.55228 20 9V5C20 4.44772 19.5523 4 19 4Z'
								stroke={listType === "grid" ? "#1E5156" : "#616A6A"}
								fill={listType === "grid" ? "#1E5156" : ""}
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M9 14H5C4.44772 14 4 14.4477 4 15V19C4 19.5523 4.44772 20 5 20H9C9.55228 20 10 19.5523 10 19V15C10 14.4477 9.55228 14 9 14Z'
								stroke={listType === "grid" ? "#1E5156" : "#616A6A"}
								fill={listType === "grid" ? "#1E5156" : ""}
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M19 14H15C14.4477 14 14 14.4477 14 15V19C14 19.5523 14.4477 20 15 20H19C19.5523 20 20 19.5523 20 19V15C20 14.4477 19.5523 14 19 14Z'
								stroke={listType === "grid" ? "#1E5156" : "#616A6A"}
								fill={listType === "grid" ? "#1E5156" : ""}
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
					<button
						type='button'
						onClick={() => {
							setListType("row");
							setGrid(1);
						}}
						className={`p-2 ${
							listType === "row" ? "bg-[#1e515610] rounded" : ""
						}`}>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M18 4H6C4.89543 4 4 4.89543 4 6V8C4 9.10457 4.89543 10 6 10H18C19.1046 10 20 9.10457 20 8V6C20 4.89543 19.1046 4 18 4Z'
								stroke={listType === "row" ? "#1E5156" : "#616A6A"}
								fill={listType === "row" ? "#1E5156" : ""}
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M18 14H6C4.89543 14 4 14.8954 4 16V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V16C20 14.8954 19.1046 14 18 14Z'
								stroke={listType === "row" ? "#1E5156" : "#616A6A"}
								fill={listType === "row" ? "#1E5156" : ""}
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
};

export default ListSortHeader;
