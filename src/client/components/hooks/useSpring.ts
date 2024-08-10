import { RunService } from "@rbxts/services";
import React, { useEffect, useRef } from "@rbxts/react";
import { useMemo, Binding, useBinding } from "@rbxts/react";
import type { MotionGoal, SpringOptions } from "@rbxts/ripple";
import { createMotion, Motion } from "@rbxts/ripple";
import { useMotion } from "./useMotion";

function getBindingValue<T extends MotionGoal>(goal: T | Binding<T>) {
    return typeIs(goal, "userdata")
        ? (goal as T)
        : (goal as Binding<T>).getValue();
}

export function useSpring<T extends MotionGoal>(
    goal: T | Binding<T>,
    options?: SpringOptions,
): Binding<T>;

export function useSpring(
    goal: MotionGoal | Binding<MotionGoal>,
    options?: SpringOptions,
) {
    const [binding, motion] = useMotion(getBindingValue(goal));
    const previousValue = useRef(getBindingValue(goal));

    useEffect(() => {
        const heartbeat = RunService.Heartbeat.Connect(() => {
            const currentValue = getBindingValue(goal);

            print(currentValue === previousValue.current);

            if (currentValue !== previousValue.current) {
                previousValue.current = currentValue;
                motion.spring(currentValue, options);
            }
        });

        return () => heartbeat.Disconnect();
    }, [goal, options, motion]);

    return binding;
}
