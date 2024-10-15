
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="w-4/12 p-4 mx-auto my-5 text-center">
            <p className="text-[#D99904] text-[20px] p-4">{subHeading}</p>
            <h2 className="text-4xl text-[#151515] border-y-4 dark:text-[#ffff] p4 my-5">{heading}</h2>
        </div>
    );
};

export default SectionTitle;