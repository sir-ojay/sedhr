import Button from "@/components/global/Button";
import React from "react";

type VerificationCategoriesProps = {
	_categories: string[];
	categories: string[];
	setCategories: (categories: string[]) => void;
};

const VerificationCategories = ({
	_categories,
	categories,
	setCategories,
}: VerificationCategoriesProps) => {
	const handleSetCategories = (category: string) => {
		if (categories.includes(category)) {
			setCategories(categories.filter((c) => c !== category));
		} else {
			setCategories([...categories, category]);
		}
	};

	return (
		<section className='space-y-[18px] mb-9'>
			<h4 className='font-semibold text-[20px] text-dark-900'>
				Select your categories
			</h4>

			<div className='flex items-center flex-wrap gap-x-4 gap-6'>
				{_categories.map((category) => (
					<Button
						type='button'
						onClick={() => handleSetCategories(category)}
						key={category}
						theme='plain'
						className={`border ${
							categories.includes(category)
								? "bg-[#1E5156] text-white"
								: "border-[#B8C9C9] hover:bg-tertiary text-dark-100"
						}  rounded-[30px]  font-normal`}>
						{category}
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
