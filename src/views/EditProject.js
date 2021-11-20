import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectForm from '../Components/ProjectForm';
import { getProjectFB } from '../api/data/projectData';

export default function EditProject() {
  const [modProject, setEditProject] = useState({});
  const { firebaseKey } = useParams();
  useEffect(() => {
    getProjectFB(firebaseKey).then(setEditProject);
  }, []);
  console.warn(modProject);
  return (
    <div>
      <h1>Edit </h1>
      <ProjectForm projectObj={modProject} />
    </div>
  );
}
