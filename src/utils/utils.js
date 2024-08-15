const formatDate = (date) => {
    if (!date) return null;
    const formattedDate = new Date(date);
    return formattedDate.toISOString().split('T')[0];
};

const formatLoan = (loan) => {
    return {
        ...loan._doc,
        loanDate: formatDate(loan.loanDate),
        dueDate: formatDate(loan.dueDate),
        returnDate: loan.returnDate ? formatDate(loan.returnDate) : ''
    };
};

export default formatLoan;
