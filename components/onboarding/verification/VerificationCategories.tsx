import Button from "@/components/global/Button";
import React from "react";

type VerificationCategoriesProps = {
	_categories: string[];
	category: string;
	setCategory: (category: string) => void;
};

const VerificationCategories = ({
	_categories,
	category,
	setCategory,
}: VerificationCategoriesProps) => {
	const handleSetCategories = (selectedCategory: string) => {
		if (selectedCategory === category) setCategory("");
		else setCategory(selectedCategory);
	};

	return (
		<section className='space-y-[18px] mb-9'>
			<h4 className='font-semibold text-base md:text-[20px] text-dark-900'>
				Select a category
			</h4>

			<div className='flex items-center flex-wrap gap-x-4 gap-6'>
				{_categories.map((category_) => (
					<Button
						type='button'
						onClick={() => handleSetCategories(category_)}
						key={category_}
						theme='plain'
						className={`border ${
							category === category_
								? "bg-[#1E5156] text-white"
								: "border-[#B8C9C9] hover:bg-tertiary text-dark-100"
						}  rounded-[30px] text-sm md:text-base font-normal`}>
						{category_}
					</Button>
				))}
			</div>
		</section>
	);
};

export default VerificationCategories;

VerificationCategories.defaultProps = {
	_categories: [
		"Large private hospitals",
		"Diagnostic centres",
		"Ultrasound/Scan centres",
		"Dental clinics",
		"Sports medicine facilities",
		"Old people’s homes",
		"Medical laboratories",
		"Pharmaceutical manufacturers",
		"Optometry/Eye clinics",
		"Specialist Hospitals",
	],
};
