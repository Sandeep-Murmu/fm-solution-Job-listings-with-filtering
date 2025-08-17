function JobItem({ jobObj }) {
  console.log(jobObj);
  console.log(jobObj.languages);

  return (
    <div
      className={`job-item rounded-md shadow-[0_10px_15px_-3px_rgba(91,164,164,0.3)]  flex items-center p-6.5 w-full max-w-5xl justify-between bg-white  ${
        jobObj.featured && "border-l-4 border-l-(--Green-400)"
      }`}
    >
      <div className="job-logo pr-5">
        <img src={jobObj.logo} alt={jobObj.company} />
      </div>
      <div className="job-info mr-auto">
        <div className="job-info__top flex items-center mb-1">
          <h3 className="company-name font-bold mr-4 text-(--Green-400)">
            {jobObj.company}
          </h3>
          <div className="job-tags flex  gap-1.5 text-xs font-bold *:px-2 *:py-1 *:leading-[21px] *:text-(--Green-50) *:rounded-full *:uppercase">
            {jobObj.new && <div className="job-new bg-(--Green-400)">new!</div>}
            {jobObj.featured && (
              <div className="job-featured bg-(--Green-900)">featured</div>
            )}
          </div>
        </div>
        <div className="job-info__main">
          <h2 className="job-position text-xl font-bold hover:text-(--Green-400) cursor-pointer transition-colors mb-1">
            {jobObj.position}
          </h2>
          <ul className="job-detail flex list-disc text-(--Gray-400) gap-8 indent-2 ml-[-8px]">
            <li className="list-none">{jobObj.postedAt}</li>
            <li>{jobObj.contract}</li>
            <li>{jobObj.location}</li>
          </ul>
        </div>
      </div>
      <div className="job-holdings flex gap-4 text-(--Green-400) font-semibold *:bg-(--Green-50) *:px-2 *:py-1 text-sm *:rounded-sm *:cursor-pointer *:hover:bg-(--Green-400) *:hover:text-(--Green-50) transition-all">
        <button className="job-role">{jobObj.role}</button>
        <button className="job-level">{jobObj.level}</button>

        {jobObj.languages.map((language, index) => {
          return (
            <button key={index} className="job-language">
              {language}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default JobItem;
