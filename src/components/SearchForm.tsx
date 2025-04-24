import React from 'react'

type SearchFormProps = {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}


export default function SearchForm({ value, onChange }: SearchFormProps) {

    return (

        <input
            type="text"
            value={value}
            onChange={onChange}
        />
    )

}

