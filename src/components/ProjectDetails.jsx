import Content from './Content';
import ListItem from './ListItem';

// TEST //
const projects = [
  {
    title: 'Test Project',
    tech: ['javascript', 'react', 'tailwind'],
    description: 'This is a React project that used the Context API',
  },
];

function createProjectListItem(project) {
  return Object.entries(project).map(([key, value]) => (
    <ListItem
      key={key}
      label={key}
      value={Array.isArray(value) ? value.join(', ') : value}
    />
  ));
}

function ProjectDetails() {
  return (
    <div className='shadow-subtle-sm'>
      <h3>Details</h3>
      <Content cls='bg-steel inner-subtle rounded-b uppercase'>
        {projects.map((p) => createProjectListItem(p))}
      </Content>
    </div>
  );
}

export default ProjectDetails;
