function JobTagFilter({ tags, removeTag, clearTags }) {
  return (
    <div className="tag-container w-full max-w-5xl px-8 py-4 bg-white shadow-[0_10px_15px_-3px_rgba(91,164,164,0.3)] mx-auto rounded-md flex justify-between">
      <div className="tag-lists flex flex-wrap gap-4">
        {tags.map((tag, index) => {
          return (
            <div key={index} className="button-container flex items-stretch">
              <button className="tag-button text-(--Green-400) font-semibold text-sm bg-(--Green-50) px-2 py-1 rounded-l-sm">
                {tag}
              </button>
              <button className="cursor-pointer p-2 bg-(--Green-400) hover:bg-black transition-all rounded-r-sm">
                <img
                  src="./images/icon-remove.svg"
                  onClick={() => removeTag(tag)}
                ></img>
              </button>
            </div>
          );
        })}
      </div>
      <button
        className="font-semibold text-sm text-(--Green-400) hover:underline decoration-1 cursor-pointer"
        onClick={clearTags}
      >
        Clear
      </button>
    </div>
  );
}

export default JobTagFilter;
