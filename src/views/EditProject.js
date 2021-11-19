import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ProjectForm from '../Components/ProjectForm';
import { getProjectFB } from '../api/data/projectData';

export default function EditProject() {
  const [editProject, setEditProject] = useState({});
  const { firebaseKey } = useParams();
  useEffect(() => {
    getProjectFB(firebaseKey).then(setEditProject);
  }, []);
  return (
    <div>
      <h1>Edit</h1>
      <ProjectForm projectObj={editProject} />
    </div>
  );
}
