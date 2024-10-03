import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRepoContext } from '../../context/RepoContext';
import {searchPullRequests} from '../../service/prSearch/prSearch';
import AdvancedFilter  from '../advancedFilter/advancedFilter';


function PRList() {
    const { selectedRepo } = useRepoContext();
    const [pullRequests, setPullRequests] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchText, setSearchText] = useState('');
    const pageSize = 10;

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedRepo) {
            try {
                const response = await searchPullRequests(selectedRepo.ID, {
                    searchText,
                });
                setPullRequests(response.documents);
                setTotalPages(Math.ceil(response.documents.length / pageSize));
                console.log('Searched pull requests:', response.documents);
                console.log('Current Repo:', selectedRepo);
                console.log('Number of pull requests:', response.documents.length);
            } catch (error) {
                console.error('Error searching pull requests:', error);
            }
        }
    };

    useEffect(() => {
        const fetchPullRequests = async () => {
            if (selectedRepo) {
                try {
                    const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
                    const response = await axios.get(`${backendUrl}/pullrequests`, {
                        params: {
                            id: selectedRepo.ID,
                            pageNumber: pageNumber,
                            pageSize: pageSize
                        }
                    });
                    setPullRequests(response.data);
                    setTotalPages(Math.ceil(selectedRepo.PullRequests.length / pageSize));
                    console.log('Fetched pull requests:', response.data);
                    console.log('Current Repo:', selectedRepo);
                    console.log('Number of pull requests:', selectedRepo.PullRequests.length);
                    console.log('Current Page Number:', pageNumber);
                } catch (error) {
                    console.error('Error fetching pull requests:', error);
                }
            }
        };

        fetchPullRequests();
    }, [selectedRepo, pageNumber, pageSize]);

    const onPageChange = (page: number) => setPageNumber(page);

    return (
        <div className="overflow-x-auto" >
            <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16" style={{ position: 'fixed', left: 0, right: 0, height:'100vh' }} >
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div className="gap-8 lg:flex">
      <div className="w-full">
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-8">{selectedRepo?.Name}: Pull Requests</h2>
        <div className="mb-4 items-center justify-between md:flex md:space-x-4">
          <form className="flex items-center w-full" onSubmit={handleSearch}>
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search pull requests..."
                required
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <button type="submit" className="p-2.5 ms-2 text-lg font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>

          <div className="mt-4 items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 md:mt-0">

          <form className="max-w-sm mx-auto">
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Full Text Search</option>
              <option value="semanticSearch">Semantic Search</option>
              <option value="codeSearch">Code Search</option>
              </select>
          </form>


            <AdvancedFilter />
          </div>
        </div>

        {pullRequests.map((pr) => (
          <div key={pr.ID||pr.id} className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="items-start justify-between border-b border-gray-100 pb-4 dark:border-gray-700 md:flex lg:block xl:flex">
              <div className="mb-4 justify-between sm:flex sm:items-center md:mb-0 md:block lg:mb-4 lg:flex xl:mb-0 xl:block">
                <h3 className="dark:text-gry-400 mb-2 text-gray-500 sm:mb-0 md:mb-2">
                  PR Title :
                  <a href="#" className="font-medium text-gray-900 hover:underline dark:text-white"> {pr.Title || pr.title || ''}</a>
                  <span className="ms-2 inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-base font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                    <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z" />
                    </svg>
                    {pr.ID||pr.id}
                  </span>
                </h3>
              </div>
              <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                <button id="deleteOrderButton4" data-modal-target="deleteOrderModal2" data-modal-toggle="deleteOrderModal2" type="button" className="w-full rounded-lg bg-blue-700 px-3 py-2 text-lg font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 sm:w-auto">Update</button>
                <a href="#" className="inline-flex w-full items-center justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-lg font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:mt-0 sm:w-auto">
                  <svg className="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 5h6m-6 4h6M10 3v4h4V3h-4Z" />
                  </svg>
                  Open
                </a>
              </div>
            </div>
            <div className="mb-4 items-center sm:flex sm:flex-wrap xl:flex">
              <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-8">
                <dt className="me-2 font-medium text-gray-900 dark:text-white">Created at:</dt>
                <dd>{pr.CreatedAt || pr.createdAt ? new Date(pr.CreatedAt || pr.createdAt).toLocaleDateString() : ''}</dd>
              </dl>
              <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400 sm:me-8">
                <dt className="me-2 font-medium text-gray-900 dark:text-white">Author:</dt>
                <dd>{pr.Author || pr.author || ''}</dd>
              </dl>
              <dl className="mt-4 flex items-center text-gray-500 dark:text-gray-400">
                <dt className="me-2 font-medium text-gray-900 dark:text-white">Status:</dt>
                <dd className="flex items-center"> {pr.State || pr.state || ''}
                </dd>
              </dl>
            </div>
            <div className="flex items-center rounded-lg bg-orange-50 px-4 py-3 text-lg text-orange-800 dark:bg-gray-700 dark:text-orange-300" role="alert">
              <svg className="me-2 hidden h-4 w-4 flex-shrink-0 sm:flex" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
              </svg>
              <span className="sr-only">Info</span>
              <div style={{ whiteSpace: 'pre-wrap', overflowY: 'auto', maxHeight: '200px' }}>
                {pr.Description || pr.description || ''}
              </div>
            </div>
          </div>
        ))}

        <nav className="mt-6 flex items-center justify-center sm:mt-8" aria-label="Page navigation example">
          <ul className="flex h-8 items-center -space-x-px text-lg">
            <li>
              <button
          onClick={() => onPageChange(pageNumber - 1)}
          disabled={pageNumber === 1}
          className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
          <span className="sr-only">Previous</span>
          <svg className="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" />
          </svg>
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => {
              if (page === 1 || page === totalPages || (page >= pageNumber - 1 && page <= pageNumber + 1)) {
          return (
            <li key={page}>
              <button
                onClick={() => onPageChange(page)}
                className={`flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${page === pageNumber ? 'z-10 border-primary-300 bg-primary-50 text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' : ''}`}
              >
                {page}
              </button>
            </li>
          );
              } else if (page === pageNumber - 2 || page === pageNumber + 2) {
          return (
            <li key={page}>
              <span className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">...</span>
            </li>
          );
              }
              return null;
            })}
            <li>
              <button
          onClick={() => onPageChange(pageNumber + 1)}
          disabled={pageNumber === totalPages}
          className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
          <span className="sr-only">Next</span>
          <svg className="h-4 w-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
          </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div id="deleteOrderModal2" aria-hidden="true" className="fixed left-0 right-0 top-0 z-50 hidden h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full">
      <div className="relative h-full w-full max-w-md p-4 md:h-auto">
        <div className="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
          <button type="button" className="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-lg text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteOrderModal2">
            <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
            <svg className="h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
            </svg>
            <span className="sr-only">Danger icon</span>
          </div>
          <p className="mb-3.5 text-gray-900 dark:text-white"><span className="font-medium text-primary-700 dark:text-primary-500">@bonniegr</span>, are you sure you want to delete this order from your account?</p>
          <p className="mb-4 text-gray-500 dark:text-gray-300">This action cannot be undone.</p>
          <div className="flex items-center justify-center space-x-4">
            <button data-modal-toggle="deleteOrderModal2" type="button" className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-lg font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600">
              No, cancel
            </button>
            <button data-modal-toggle="deleteOrderModal2" type="button" className="rounded-lg bg-red-600 px-3 py-2 text-center text-lg font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
              Yes, I'm sure
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
}

export default PRList;
