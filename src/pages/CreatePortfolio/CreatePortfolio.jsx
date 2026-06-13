import React, { useContext, useState } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";

const CreatePortfolio = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [presentation, setPresentation] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [resume, setResume] = useState("");
  const [experience, setExperience] = useState([
    {
      jobTitle: "",
      companyName: "",
      period: {
        from: "",
        to: "",
      },
      isCurrentJob: false,
      description: "",
    },
  ]);

  const { handleCreatePortfolio } = useContext(PortfolioContext);

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...experience];

    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value,
    };

    setExperience(updatedExperience);
  };

  const handlePeriodChange = (index, field, value) => {
    const updatedExperience = [...experience];

    updatedExperience[index] = {
      ...updatedExperience[index],
      period: {
        ...updatedExperience[index].period,
        [field]: value,
      },
    };

    setExperience(updatedExperience);
  };

  const handleCurrentJobChange = (index, checked) => {
    const updatedExperience = [...experience];

    updatedExperience[index] = {
      ...updatedExperience[index],
      isCurrentJob: checked,
      period: {
        ...updatedExperience[index].period,
        to: checked ? "" : updatedExperience[index].period.to,
      },
    };

    setExperience(updatedExperience);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        jobTitle: "",
        companyName: "",
        period: {
          from: "",
          to: "",
        },
        isCurrentJob: false,
        description: "",
      },
    ]);
  };

  const removeExperience = (indexToRemove) => {
    const filteredExperience = experience.filter(
      (_, index) => index !== indexToRemove,
    );

    setExperience(filteredExperience);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          handleCreatePortfolio(
            (e,
            {
              firstName,
              lastName,
              email,
              jobTitle,
              imageUrl,
              presentation,
              githubLink,
              linkedinLink,
              resume,
              experience,
            }),
          );
        }}
      >
        <label htmlFor="firstName">First name :</label>
        <input
          id="firstName"
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Last name :</label>
        <input
          id="lastName"
          type="text"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="email">Email :</label>
        <input
          id="email"
          type="email"
          placeholder="Enter a valid email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="jobTitle">Job title :</label>
        <input
          id="jobTitle"
          type="text"
          placeholder="Enter your job title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />

        <label htmlFor="imageUrl">Image URL :</label>
        <input
          id="imageUrl"
          type="url"
          placeholder="Enter an image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <label htmlFor="presentation">Presentation :</label>
        <textarea
          id="presentation"
          placeholder="Write a short presentation"
          value={presentation}
          onChange={(e) => setPresentation(e.target.value)}
        />

        <label htmlFor="githubLink">Add your Github link :</label>
        <input
          id="githubLink"
          type="url"
          placeholder="Enter your Github link"
          value={githubLink}
          onChange={(e) => setGithubLink(e.target.value)}
        />

        <label htmlFor="linkedinLink">Add your Linkedin link :</label>
        <input
          id="linkedinLink"
          type="url"
          placeholder="Enter your Linkedin link"
          value={linkedinLink}
          onChange={(e) => setLinkedinLink(e.target.value)}
        />

        <label htmlFor="resume">Resume :</label>
        <input
          id="resume"
          type="text"
          placeholder="Enter your resume URL or summary"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
        />

        <fieldset>
          <legend>Add your experiences :</legend>

          {experience.map((item, index) => (
            <div key={index}>
              <h4>Experience #{index + 1}</h4>

              <label htmlFor={`experience-jobTitle-${index}`}>
                Job title :
              </label>
              <input
                id={`experience-jobTitle-${index}`}
                type="text"
                placeholder="Frontend Developer"
                value={item.jobTitle}
                onChange={(e) =>
                  handleExperienceChange(index, "jobTitle", e.target.value)
                }
              />

              <label htmlFor={`experience-companyName-${index}`}>
                Company name :
              </label>
              <input
                id={`experience-companyName-${index}`}
                type="text"
                placeholder="Company Name"
                value={item.companyName}
                onChange={(e) =>
                  handleExperienceChange(index, "companyName", e.target.value)
                }
              />

              <label htmlFor={`experience-from-${index}`}>Start date :</label>
              <input
                id={`experience-from-${index}`}
                type="month"
                value={item.period.from}
                onChange={(e) =>
                  handlePeriodChange(index, "from", e.target.value)
                }
              />

              <label>
                <input
                  type="checkbox"
                  checked={item.isCurrentJob}
                  onChange={(e) =>
                    handleCurrentJobChange(index, e.target.checked)
                  }
                />
                I currently work here
              </label>

              <label htmlFor={`experience-to-${index}`}>Period to :</label>
              <input
                id={`experience-to-${index}`}
                type="month"
                value={item.period.to}
                onChange={(e) =>
                  handlePeriodChange(index, "to", e.target.value)
                }
              />

              <label htmlFor={`experience-description-${index}`}>
                Description :
              </label>
              <textarea
                id={`experience-description-${index}`}
                placeholder="Describe your role and achievements"
                value={item.description}
                onChange={(e) =>
                  handleExperienceChange(index, "description", e.target.value)
                }
              />

              {experience.length > 1 && (
                <button type="button" onClick={() => removeExperience(index)}>
                  Remove experience
                </button>
              )}
            </div>
          ))}

          <button type="button" onClick={addExperience}>
            Add another experience
          </button>
        </fieldset>

        <button type="submit">Save portfolio</button>
      </form>
    </>
  );
};

export default CreatePortfolio;
