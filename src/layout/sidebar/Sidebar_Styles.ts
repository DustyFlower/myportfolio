import styled from 'styled-components';

const Sidebar = styled.aside`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0;
    margin-left: 1.1rem;
    z-index: 999;
`

const SidebarList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
`

const SidebarListItem = styled.li`
    line-height: 0;
`

export const S = {
    Sidebar,
    SidebarList,
    SidebarListItem
}