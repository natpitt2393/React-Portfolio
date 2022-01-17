import './App.css';


function App() {
    const [currentPage, setCurrentPage] = useState('About')
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      else if (currentPage === 'Projects') {
        return <Projects />;
      }
      else if (currentPage === 'Resume') {
        return <Resume />;
      } else {
        return <Contact />;
      }
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }


export default App;
