import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const CoursesPage = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [courses, setCourses] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = await getAccessTokenSilently();
        
        const response = await fetch('https://45vz631c-4000.inc1.devtunnels.ms/api/courses', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setCourses(data);
      } catch (e) {
        setError(e.message);
        console.error("Failed to fetch courses:", e);
      }
    };

    fetchCourses();
  }, [getAccessTokenSilently]);

  return (
    <div>
      <h1>Protected Courses</h1>
      <p>Only logged-in users can see this page and its content.</p>
      
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      
      {courses ? (
        <ul>
          {courses.map(course => <li key={course.id}>{course.title}</li>)}
        </ul>
      ) : (
        <p>Loading courses...</p>
      )}
    </div>
  );
};

export default CoursesPage;