function JobItem({ jobObj }) {
  console.log(jobObj);
  console.log(jobObj.languages);

  return (
    <div className="job-item">
      <div className="job-logo">
        <img src={jobObj.logo} alt={jobObj.company} />
      </div>
      <div className="job-info">
        <div className="job-info__top">
          <h3 className="company-name">{jobObj.company}</h3>
          <div className="job-tags">
            {jobObj.new && <div className="job-new">new</div>}
            {jobObj.featured && <div className="job-featured">featured</div>}
          </div>
        </div>
        <div className="job-info__main">
          <h2 className="job-position">{jobObj.position}</h2>
          <ul className="job-detail">
            <li>{jobObj.postedAt}</li>
            <li>{jobObj.contract}</li>
            <li>{jobObj.location}</li>
          </ul>
        </div>
      </div>
      <div className="job-holdings">
        <div className="job-role">{jobObj.role}</div>
        <div className="job-level">{jobObj.level}</div>

        {jobObj.languages.map((language, index) => {
          return (
            <div key={index} className="job-language">
              {language}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default JobItem;
