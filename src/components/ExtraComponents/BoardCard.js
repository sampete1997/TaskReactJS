
const BoardCards = (props) => {

    const { totalRevenues, totalTransactions, totalLikes, totalUsers } = props.metric

    return (
        <div className=" flex justify-between flex-wrap mb-5">

            <div className="bg-[#DDEFE0] w-[250px] m-1 mt-2 p-4 border rounded-2xl">
                <div className="my-1 flex justify-end ">
                    <img src="/Vector (2).svg" alt="#"></img>
                </div>

                <div>
                    <p className="py-2 text-14px font-[400]">Total Revenues
                    </p>
                    <p className="font-[700] text-[24px]">
                        {`$ ${totalRevenues} ` || `$ 797979`}
                    </p>
                </div>
            </div>

            <div className="bg-[#F4ECDD] w-[250px] m-1 mt-2 p-4 border rounded-2xl">
                <div className="my-1 flex justify-end ">
                    <img src="/Vector (3).svg" alt="#"></img>
                </div>

                <div>
                    <p className="py-2 text-14px font-[400]">Total Transactions
                    </p>
                    <p className="font-[700] text-[24px]">
                        {` ${totalTransactions} ` || `$ 797979`}
                    </p>
                </div>
            </div>

            <div className="bg-[#efdde7] w-[250px] m-1 mt-2 p-4 border rounded-2xl">
                <div className="my-1 flex justify-end ">
                    <img src="/Vector (4).svg" alt="#"></img>
                </div>

                <div>
                    <p className="py-2 text-14px font-[400]">Total Likes
                    </p>
                    <p className="font-[700] text-[24px]">
                        {` ${totalLikes} ` || `$ 797979`}
                    </p>
                </div>
            </div>

            <div className="bg-[#DEE0EF] w-[250px] m-1 mt-2 p-4 border rounded-2xl">
                <div className="my-1 flex justify-end ">
                    <img src="/Vector (5).svg" alt="#"></img>
                </div>

                <div>
                    <p className="py-2 text-14px font-[400]">Total Users
                    </p>
                    <p className="font-[700] text-[24px]">
                        {` ${totalUsers} ` || `$ 797979`}
                    </p>
                </div>
            </div>



        </div>
    )
}
export default BoardCards;