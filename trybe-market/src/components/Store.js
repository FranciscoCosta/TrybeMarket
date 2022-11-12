/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: aniljaco (https://sketchfab.com/aniljaco)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/online-store-anil-37325ea8995b4b5e81ac1b0b86d4ee32
title: Online Store - Anil
*/

import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/store.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 1.4]} scale={0.20}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Body} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Screen} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.mat_door} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.mat_door_panes} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.mat_frame} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.mat_roof} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.mat_slabs} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.mat_walls} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.mat_window} />
      </group>
    </group>
  )
}

useGLTF.preload('/store.gltf')
