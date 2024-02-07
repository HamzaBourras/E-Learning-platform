/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useMemo, useCallback } from "react";
// import { useNavigate } from 'react-router-dom'
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Input,
    Button,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    User,
    Pagination,
    useDisclosure,
    Modal,
    ModalBody,
    ModalContent
} from "@nextui-org/react";
import { VerticalDotsIcon } from "../VerticalDotsIcon";
import { SearchIcon } from "../SearchIcon";
import { ChevronDownIcon } from "../ChevronDownIcon";
import { capitalize } from "../../utils/utils";
import { PlusIcon } from "../PlusIcon";



const TableComponentWithFilter = ({ data, columns, user, Component }) => {

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [selectId, setSelectId] = useState(null);


    // const navigate = useNavigate();
    // navigate("../edit", { state: { userId, user } })

    const handleEdit = (id) => {
        setSelectId(id);
        onOpen();
    };

    const handleDelete = (userId) => {
        console.log(`Delete data with ID: ${userId}`);
    };
    // ---------------------------------------------

    const INITIAL_VISIBLE_COLUMNS = [];
    for (let i = 0; i < columns.length; i++) {
        INITIAL_VISIBLE_COLUMNS.push(columns[i].uid)
    }

    const [filterValue, setFilterValue] = useState("");
    const [selectedKeys, setSelectedKeys] = useState(new Set([]));
    const [visibleColumns, setVisibleColumns] = useState(new Set(INITIAL_VISIBLE_COLUMNS));
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [sortDescriptor, setSortDescriptor] = useState({
        column: "age",
        direction: "ascending",
    });
    const [page, setPage] = useState(1);

    const pages = Math.ceil(data.length / rowsPerPage);
    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = useMemo(() => {
        return visibleColumns === "all" ? columns : columns.filter((column) => visibleColumns.has(column.uid));
    }, [visibleColumns]);

    // ----------------filter using input--------------------
    const filteredItems = useMemo(() => {
        if (!hasSearchFilter) {
            return data;
        }

        const searchValue = filterValue.toLowerCase();

        return data.filter((item) => {
            return columns.some((column) => {
                const cellValue = String(item[column.uid]).toLowerCase();
                return cellValue.includes(searchValue);
            });
        });
    }, [data, columns, filterValue, hasSearchFilter]);

    //----------------------------------------------------------------

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = useMemo(() => {
        return [...items].sort((a, b) => {
            const first = a[sortDescriptor.column];
            const second = b[sortDescriptor.column];
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const renderCell = useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{ radius: "full", size: "sm", src: user.avatar }}
                        classNames={{ description: "text-default-500" }}
                        description={user.email}
                        name={cellValue}
                    >
                        {user.email}
                    </User>
                );
            case "role":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-small capitalize">{cellValue}</p>
                        <p className="text-bold text-tiny capitalize text-default-500">{user.team}</p>
                    </div>
                );
            case "actions":
                return (
                    <div className="relative flex justify-end items-center gap-2">
                        <Dropdown

                            className="bg-background border-1 border-default-200">
                            <DropdownTrigger>
                                <Button isIconOnly radius="full" size="sm" variant="light">
                                    <VerticalDotsIcon className="text-default-400" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem
                                    onClick={() => handleEdit(user.id)}
                                >
                                    Edit</DropdownItem>
                                <DropdownItem
                                    onClick={() => handleDelete(user.id)}
                                >
                                    Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    const onRowsPerPageChange = useCallback((e) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = useCallback((value) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const topContent = useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable
                        classNames={{
                            base: "w-full sm:max-w-[44%]",
                            inputWrapper: "border-1",
                        }}
                        placeholder="Search by name..."
                        size="sm"
                        startContent={<SearchIcon className="text-default-300" />}
                        value={filterValue}
                        variant="bordered"
                        onClear={() => setFilterValue("")}
                        onValueChange={onSearchChange}
                    />
                    <div className="flex gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button
                                    endContent={<ChevronDownIcon className="text-small" />}
                                    size="sm"
                                    variant="flat"
                                >
                                    Columns
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={visibleColumns}
                                selectionMode="multiple"
                                onSelectionChange={setVisibleColumns}
                            >
                                {columns.map((column) => (
                                    <DropdownItem key={column.uid} className="capitalize">
                                        {capitalize(column.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Button
                            onPress={onOpen}
                            className="bg-foreground text-background"
                            endContent={<PlusIcon />}
                            size="sm">Add New
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">Total {data.length} {user}s</span>
                    <label className="flex items-center text-default-400 text-small">
                        Rows per page:
                        <select
                            className="bg-transparent outline-none text-default-400 text-small"
                            onChange={onRowsPerPageChange}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }, [filterValue, visibleColumns, onSearchChange, onRowsPerPageChange, data.length, hasSearchFilter]);

    // -----------------------------for pagination -----------------------------------------
    const bottomContent = useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-between items-center">
                <Pagination
                    showControls
                    classNames={{
                        cursor: "bg-foreground text-background",
                    }}
                    color="default"
                    isDisabled={hasSearchFilter}
                    page={page}
                    total={pages}
                    variant="light"
                    onChange={setPage}
                />
            </div>
        );
    }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

    //-----------------------------------------------------------------------------------------

    const classNames = useMemo(() => ({
        wrapper: ["max-h-[382px]", "max-w-3xl"],
        th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
        td: [
            "group-data-[first=true]:first:before:rounded-none",
            "group-data-[first=true]:last:before:rounded-none",
            "group-data-[middle=true]:before:rounded-none",
            "group-data-[last=true]:first:before:rounded-none",
            "group-data-[last=true]:last:before:rounded-none",
        ],
    }), []);

    return (
        <div>
            <Table
                className='xs:sm:overflow-x-scroll md:lg:overflow-hidden overflow-y-hidden'
                removeWrapper
                aria-label="User Information Table"
                bottomContent={bottomContent}
                bottomContentPlacement="outside"
                checkboxesProps={{
                    classNames: {
                        wrapper: "after:bg-foreground after:text-background text-background",
                    },
                }}
                classNames={classNames}
                selectedKeys={selectedKeys}
                selectionMode="single"
                sortDescriptor={sortDescriptor}
                topContent={topContent}
                topContentPlacement="outside"
                onSelectionChange={setSelectedKeys}
                onSortChange={setSortDescriptor}
            >
                <TableHeader columns={headerColumns}>
                    {(column) => (
                        <TableColumn
                            key={column.uid}
                            align={column.uid === "actions" ? "center" : "start"}
                            allowsSorting={column.sortable}
                        >
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody emptyContent="No data found" items={sortedItems}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            <div>

                <Modal
                    // size="5xl"
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    onClose={() => {
                        setSelectId(null);
                        onClose();
                    }}
                    className="overflow-auto size-[400px]"
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalBody className="flex justify-center">
                                    <Component id={selectId}/>
                                </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>


            </div>
        </div>
    );
};

export default TableComponentWithFilter;
