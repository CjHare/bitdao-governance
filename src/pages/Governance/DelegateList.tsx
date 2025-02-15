import handleNumberFormat from "../../helpers/handleNumberFormat";
import addressTruncate from "../../helpers/addressTruncate";

type DelegateListProps = {
    delegates: any;
}

function DelegateList({ delegates }: DelegateListProps) {
  

  return (
    <div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 rounded-b-2xl">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-white">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rank
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Votes
                    </th>
                    
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {delegates.map((row: any, index: any) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        <a
                        href={`${process.env.REACT_APP_ETHERSCAN_ADDRESS}${row.id}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {index + 1}&nbsp;
                        <span>|</span> &nbsp;
                        {addressTruncate(row.id)}
                      </a>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {handleNumberFormat(row.delegatedVotes)}
                      </span>
                    </td>
                  </tr>

                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
   

    </div>
  )
}

export default DelegateList;

