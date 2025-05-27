const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white px-4 py-4">
            <span className="text-gray-400">
                {computedItemsLeft} items left
            </span>
            <p className="text-gray-400" onClick={clearCompleted}>
                Clear Complete
            </p>
        </section>
    );
};

export default TodoComputed;
