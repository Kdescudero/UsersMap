class FuseUtils {
    static searchInString(value, searchText)
    {
        return value.toLowerCase().includes(searchText);
    }

    static searchInArray(arr, searchText)
    {
        for ( const value of arr )
        {
            if ( typeof value === 'string' )
            {
                if ( this.searchInString(value, searchText) )
                {
                    return true;
                }
            }
        }
    }
}