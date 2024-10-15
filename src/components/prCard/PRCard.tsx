// The pop-up card will display important pull request details in a structured manner using flowbite components. Here's the updated ASCII diagram:
import Markdown from 'react-markdown'
import ReactHtmlParser from 'react-html-parser';
import isHtml from 'is-html';

// +---------------------------------------+---------------------------+
// | Title: Improve mnemonic restoring     | Labels: [type-bug]        |
// | Description:                          | [area-seedPhrase]         |
// | Per [this twitter thread](...)        | [ux-papercuts]            |
// | - Generates the next 10 accounts...   +---------------------------+
// | - Adds non-zero nonce check...        | Comments:                 |
// |---------------------------------------| - This PR has been...     |
// |---------------------------------------| - This PR was closed...   |
// | Author: github-actions[bot]           |                           |
// | State: Closed                         |                           |
// | Created At: 2024-01-01                |                           |
// | Merged At: 2024-03-22                 |                           |
// | Last Updated: 2024-03-22              |                           |
// +---------------------------------------+---------------------------+

function PrCard({ pullRequest }) {
    // const [labels,setLabels]=useState([]);
    // setLabels(pullRequest.Labels||pullRequest.labels||[])
    return (
        <article className="p-6 mb-6 text-base bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700" style={{ height: "98%" }}>
            <div className="flex" style={{ height: '97%' }}>
                <div className="flex-1 pr-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Title: {pullRequest.Title || pullRequest.title || ''}</h3>
                    <div className="text-gray-700 dark:text-white-300 mb-4 border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 p-6" style={{ height: '97%' }}>
                        <p className="font-semibold text-gray-900 dark:text-white">Description:</p>
                        <div style={{ whiteSpace: 'pre-wrap', overflowY: 'auto', maxHeight: '100%', wordWrap: 'break-word' }}>
                            <Markdown>{pullRequest.Description || pullRequest.description || ''}</Markdown>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 pl-4 border-l border-gray-200 dark:border-gray-700" >
                    <div className="mb-4">
                        <p className="font-semibold text-gray-900 dark:text-white mb-2">Labels:</p>
                        <div className="flex flex-wrap gap-2">
                            {(pullRequest.Labels || pullRequest.labels || []).map((l) => (
                                <>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mb-2 mr-2">{l}</span>
                                </>
                            ))}
                        </div>
                    </div>
                    <div style={{height:"94%"}}>
                        <p className="font-semibold text-gray-900 dark:text-white mb-2">Comments:</p>
                        <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-5" style={{ listStyleType: 'none', height:"93%",overflow:'auto' }}>
                        {(pullRequest.Comments || pullRequest.comments || []).map((comment) => (
                            <li>
                                <article className="p-6 mb-6 text-base bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                    <footer className="flex justify-between items-center mb-2">
                                        <div className="flex items-center">
                                            <img className="mr-2 w-8 h-8 rounded-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie Green" />
                                            <div>
                                                <span className="text-sm font-semibold text-gray-900 dark:text-white">{comment.Author||comment.author||''}</span>
                                                <p className="text-sm text-gray-500 dark:text-gray-400"><time>{comment.CreatedAt||comment.createdAt||''}</time></p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <button type="button" className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                                                <svg className="mr-1 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                    <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                                                </svg>
                                                22
                                            </button>
                                            <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3"
                                                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                                type="button">
                                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                                </svg>
                                                <span className="sr-only">Comment settings</span>
                                            </button>
                                        </div>
                                        {/* <!-- Dropdown menu --> */}
                                        <div id="dropdownComment3"
                                            className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                aria-labelledby="dropdownComment3Button">
                                                <li>
                                                    <a href="#"
                                                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </footer>
                                    <p className="text-gray-800 dark:text-white-400 text-sm" style={{ whiteSpace: 'pre-wrap', overflowY: 'auto', maxHeight: '100%', wordWrap: 'break-word' }}>{ isHtml(comment.Content||comment.content)? ReactHtmlParser(comment.Content||comment.content||''): <Markdown>{comment.Content||comment.content||''}</Markdown> }</p>
                                    <button type="button" className="mt-4 text-sm text-gray-900 hover:underline dark:text-white font-medium">
                                        Reply
                                    </button>
                                </article>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap items-center">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mr-4"><span className="font-semibold text-gray-900 dark:text-white">Author:</span> github-actions[bot]</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mr-4"><span className="font-semibold text-gray-900 dark:text-white">State:</span> Closed</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mr-4"><span className="font-semibold text-gray-900 dark:text-white">Created:</span> 2024-01-01</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mr-4"><span className="font-semibold text-gray-900 dark:text-white">Merged:</span> 2024-03-22</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300"><span className="font-semibold text-gray-900 dark:text-white">Last Updated:</span> 2024-03-22</p>
                </div>
            </div>
        </article>
    );
}

export default PrCard;
