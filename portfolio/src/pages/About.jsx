import Timeline from '../components/Timeline';
import Navbar from '../components/Navbar';
import './About.css';
function About(){
    const experiences = [
        {
          time: 'Feb 2023 - Aug 2023',
          title: 'Software Engineer',
          company: 'Samsung Research',
          description: [
            'Developed globally scalable microservices using C#, Golang, and .NET, ensuring high performance and reliability.',
            'Optimized APIs and background services to efficiently process large datasets, reducing AWS cloud costs by 20%.',
            'Integrated OpenTelemetry for API tracing, improving debugging efficiency and performance monitoring.',
            'Implemented benchmarking with BenchmarkDotNet for precise application performance measurement.',
            'Deployed services to AWS EC2 using Helm charts and conducted rigorous unit and stress testing.'
          ]
        },
        {
          time: 'Jul 2022 - Jan 2023',
          title: 'Software Development Engineer 1',
          company: 'HashedIn by Deloitte',
          description: [
            'Built a 3D virtual lobby for Deloitte’s intranet using Java, Angular, GCP, and ThreeJS to enhance user engagement.',
            'Developed a backend system to collect and analyze employee data, improving personalized user experiences.',
            'Optimized real-time data processing to ensure seamless and responsive interactions.',
            'Collaborated with cross-functional teams to refine UI and backend performance.'
          ]
        },
        {
          time: 'Mar 2022 - Jul 2022',
          title: 'Software Engineer Intern',
          company: 'HashedIn by Deloitte',
          description: [
            'Designed and developed a Target Marketing Tool using Java Spring Boot and Angular for user profiling and email campaigns.',
            'Led a team of three interns, setting milestones and ensuring timely project completion.',
            'Implemented APIs for efficient data processing and campaign automation.',
            'Optimized database queries and indexing strategies to enhance performance.'
          ]
        }
      ];
      
    return (
        <div className='container'>
            <Navbar/>
            <Timeline experiences={experiences} />
        </div>
    );
}
export default About;