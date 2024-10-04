// The pop-up card will display important pull request details in a structured manner using flowbite components. Here's the updated ASCII diagram:

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

function PrCard(){
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Title: Improve mnemonic restoring</h3>
                <div className="card-actions">
                    <span className="badge badge-primary">type-bug</span>
                    <span className="badge badge-primary">area-seedPhrase</span>
                    <span className="badge badge-primary">ux-papercuts</span>
                </div>
            </div>
            <div className="card-body">
                <p>Description:</p>
                <p>Per [this twitter thread](...)</p>
                <ul>
                    <li>Generates the next 10 accounts...</li>
                    <li>Adds non-zero nonce check...</li>
                </ul>
            </div>
            <div className="card-footer">
                <div className="card-footer-row">
                    <div className="card-footer-column">
                        <p>Author: github-actions[bot]</p>
                        <p>State: Closed</p>
                    </div>
                    <div className="card-footer-column">
                        <p>Created At: 2024-01-01</p>
                        <p>Merged At: 2024-03-22</p>
                        <p>Last Updated: 2024-03-22</p>
                    </div>
                </div>
                <div className="card-footer-row">
                    <p>Comments:</p>
                    <ul>
                        <li>- This PR has been...</li>
                        <li>- This PR was closed...</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PrCard;
