import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import projectsData from '../../data/proyectos.json';
import './logic.css';

const ProjectsLogica = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-teal-300">Lista de proyectos</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <li 
            key={index} 
            onClick={() => handleProjectClick(project)} 
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-teal-300">{project.titulo}</h3>
              <p className="text-gray-300">{project.descripcion}</p>
              <img src={project.imagen} alt={project.titulo} className="imagen"/>
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && selectedProject && (
        <Modal onClose={closeModal}>
          <div className="modal modalContent">
            <ul>
                <li>
            <h2 className="text-2xl font-bold mb-4 text-teal-300">{selectedProject.titulo}</h2>
            <p className="text-sm text-gray-400 mb-4">Año de creación: {selectedProject.añoCreacion}</p>
            </li>
            </ul>
            <p className="text-gray-300 mb-4">{selectedProject.descripcionDetallada}</p>
            <h3 className="text-xl font-semibold mb-2 text-teal-300">Creadores</h3>
            <ul className="list-disc list-inside mb-4 text-gray-300">
              {selectedProject.creadores.map((creador, index) => (
                <li key={index}>{creador}</li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold mb-2 text-teal-300">Premios</h3>
              {selectedProject.galardones && selectedProject.galardones.length > 0 && (
              <ul className="list-disc list-inside mb-4 text-gray-300">
                {selectedProject.galardones.map((galardon, index) => (
                  <li key={index}>
                {galardon.puesto} en {galardon.competicion} ({galardon.año})
              </li>
    ))}
  </ul>
)}
            <h3 className="text-xl font-semibold mb-2 text-teal-300">Galería</h3>
            
            <div className="grid grid-cols-3 gap-2">
              {selectedProject.galeria.map((imagen, index) => (
                <img key={index} src={imagen} alt={`Imagen ${index + 1}`} className="w-full h-24 object-cover rounded" />
              ))}
            </div>
          </div>

      
        </Modal>
      )}
    </div>
    
  );
};

export default ProjectsLogica;